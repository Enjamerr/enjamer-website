
from pathlib import Path
import shutil
import sys
import tempfile


ROOT = Path(__file__).resolve().parent
TEMPLATES = ROOT / "templates"

# Files and directories belonging exclusively to the template repository.
TEMPLATE_ONLY = {
    "init.py",
    "templates",
    "scripts",
    "docs-template",
    "README.md",
    ".github",
    ".gitignore",
}

# Git metadata must never be modified.
PROTECTED = {".git"}

# Temporary or local files that should not be deleted automatically.
LOCAL_FILES = {
    ".venv",
    "venv",
    "__pycache__",
    ".idea",
    ".vscode",
    ".DS_Store",
    "docs",
}


def get_templates():
    if not TEMPLATES.is_dir():
        sys.exit("Error: templates directory not found.")

    templates = sorted(
        directory
        for directory in TEMPLATES.iterdir()
        if directory.is_dir() and not directory.is_symlink()
    )

    if not templates:
        sys.exit("Error: no templates available.")

    return templates


def select_template(templates):
    print("\nENJAMER — Project Initializer\n")
    print("Select a technology:\n")

    for index, template in enumerate(templates, start=1):
        print(f"{index}. {template.name}")

    try:
        choice = int(input("\nEnter an option: "))
    except ValueError:
        sys.exit("Error: invalid option.")

    if not 1 <= choice <= len(templates):
        sys.exit("Error: invalid option.")

    selected = templates[choice - 1]

    if not any(selected.iterdir()):
        sys.exit(f"Error: template '{selected.name}' is empty.")

    return selected


def copy_item(source, destination):
    if source.is_symlink():
        raise RuntimeError(f"Symbolic links are not supported: {source}")

    if source.is_dir():
        shutil.copytree(source, destination, symlinks=True)
    else:
        shutil.copy2(source, destination)


def remove_item(path):
    if path.is_symlink() or path.is_file():
        path.unlink()
    elif path.is_dir():
        shutil.rmtree(path)


def validate_repository(selected):
    # Only known template files are allowed in the repository root.
    unexpected = [
        item.name
        for item in ROOT.iterdir()
        if item.name not in TEMPLATE_ONLY
        and item.name not in PROTECTED
        and item.name not in LOCAL_FILES
    ]

    if unexpected:
        sys.exit(
            "Error: repository contains unexpected files: "
            + ", ".join(sorted(unexpected))
        )

    # Prevent template content from replacing Git metadata.
    invalid = [
        item.name
        for item in selected.iterdir()
        if item.name in PROTECTED
        or item.name in {"init.py", "templates"}
    ]

    if invalid:
        sys.exit(
            "Error: template contains reserved names: "
            + ", ".join(sorted(invalid))
        )

    # Ensure every generated file can be placed safely.
    conflicts = [
        item.name
        for item in selected.iterdir()
        if (ROOT / item.name).exists()
        and item.name not in TEMPLATE_ONLY
    ]

    if conflicts:
        sys.exit(
            "Error: destination conflicts detected: "
            + ", ".join(sorted(conflicts))
        )


def initialize(selected):
    # The backup directory is outside the repository.
    with tempfile.TemporaryDirectory(prefix="enjamer-init-") as temporary:
        backup = Path(temporary) / "backup"
        staging = Path(temporary) / "staging"

        backup.mkdir()
        staging.mkdir()

        # Stage the selected technology before changing the repository.
        for item in selected.iterdir():
            copy_item(item, staging / item.name)

        # Backup files that will be removed or replaced.
        existing = [
            ROOT / name
            for name in TEMPLATE_ONLY
            if (ROOT / name).exists() or (ROOT / name).is_symlink()
        ]

        try:
            for item in existing:
                shutil.move(str(item), str(backup / item.name))

            # Copy the selected template into the repository root.
            for item in staging.iterdir():
                copy_item(item, ROOT / item.name)

        except Exception:
            print("\nError: initialization failed. Restoring files...")

            # Remove partially generated template files.
            for item in staging.iterdir():
                destination = ROOT / item.name

                if destination.exists() or destination.is_symlink():
                    remove_item(destination)

            # Restore the original template repository files.
            for item in backup.iterdir():
                shutil.move(str(item), str(ROOT / item.name))

            raise


def main():
    templates = get_templates()
    selected = select_template(templates)

    print(f"\nSelected template: {selected.name}")

    validate_repository(selected)

    confirm = input(
        "\nThis will remove the universal template files "
        "and initialize the selected project.\n"
        "Continue? [y/N]: "
    ).strip().lower()

    if confirm != "y":
        sys.exit("Initialization cancelled.")

    try:
        initialize(selected)
    except Exception as error:
        sys.exit(f"Error: {error}")

    print("\nProject initialized successfully.")
    print(f"Technology: {selected.name}")
    print("Git repository preserved.")
    print("\nYou can now install dependencies and start developing.")


if __name__ == "__main__":
    main()
