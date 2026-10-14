# First Steps

The documentation you are currently reading will eventually be moved to a fully organized documentation page accessible to all team members, prioritizing centralized information and ease of access.

This file outlines the initial steps for working with this repository, including installing dependencies and configuring the development environment to start contributing to the project. We have listed and explained these steps clearly so that any team member can follow them without issues:

1. **Clone the repository**:
   - We recommend using SSH to clone the repository, as it is more secure and eliminates the need to enter your credentials every time you interact with the remote repository.
2. **Install dependencies**:
   - Once the repository is cloned, you need to install all the dependencies required for the project to run correctly. You can do this by running the `npm install` command in the terminal.
3. **Configure the development environment**:
   - It is important to configure your Git username and email so that your commits are correctly linked to your account. You can do this using the following commands:
     - `git config --global user.name "Your username"`
     - `git config --global user.email "Your corporate email"`

   _**Example**_:

   - Name: John Doe Pérez Martínez
   - Corporate email: jdperezm@enjamer.com

   ```
   git config --global user.name "jperezatenjamer"
   git config --global user.email "jdperezm@enjamer.com"
   ```

4. **Create a branch for your work**:
   - Before you start working on any changes, it is recommended to create an initial branch to define your identity. This helps keep the change history clean and organized. The naming convention for branches is as follows:
     ```
     <developer-username>-adding-new-identity
     ```
   For more information about the branch naming convention, please refer to the [Branch Naming Convention](../formats/conventional-branch-nemes.md) document.
5. **Make changes and commits**:
   - Once you have created your branch, you must register yourself in the repository using your username and corporate email; to do this, go to the `commit-authors.yml` file and add your username and corporate email in the appropriate format. Note that this is the only change you should make for your first branch and first commit.

   For more information about the identity management, please refer to the [Identity Management](./identity.md) document.

6. **Make a commit**:
   - To make your first commit, you must write exactly the commit message shown here:
     ```
     chore(identity): adding new identity
     ```
7. **Push your branch to the remote repository and create a pull request**:
   - Once you have made your first commit, you must push your branch to the remote repository and create a pull request so that your changes can be reviewed and merged into the project's main branch. This can be done by running the following commands:
   ```
   git push origin <your-branch-name>
   ```

From this point on, you will work on the repository while adhering to the conventions outlined in the project documentation, following development best practices, and maintaining constant communication with the team to ensure that all changes are consistent and of high quality.

Thank you for your collaboration and commitment to the project. Welcome to the team!
