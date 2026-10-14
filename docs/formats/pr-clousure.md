# Pull Request Closure Comment

Use this template when closing a Pull Request to document its final state, the reason for closing it, related work, and any required follow-up actions.

---

---

```text
  ## Closure Summary

  * **Status:** `[STATUS]`
  * **Reason:** `[REASON]`
  * **Related Issue:** `#[ISSUE_NUMBER]`
  * **Replacement PR:** `#[PR_NUMBER]`

  ## Details

  [Provide a clear explanation of why the Pull Request is being closed, including relevant technical or project context.]

  ## Next Steps

  Describe any actions that must be taken after closing the Pull Request.

  ---
```

### Allowed status values

- **`Merged`**

  - The Pull Request was approved and its changes were successfully merged into the target branch.
  - Normally used when documenting a successfully completed Pull Request.

- **`Closed without merging`**

  - The Pull Request was closed and none of its changes were merged.
  - The brach related was deleted or the work most be abandoned, the changes will not be incorporated into the target branch.

- **`Rejected`**

  - The proposed changes were reviewed and intentionally not accepted.
  - Use when the implementation, approach, architecture, or proposed functionality was explicitly rejected.

- **`Cancelled`**

  - The Pull Request is no longer necessary and development of the proposed changes has been abandoned.
  - This may occur because requirements changed, the feature is no longer needed, or the work was intentionally discontinued.

- **`Superseded`**

  - The Pull Request has been replaced by another Pull Request containing a newer or corrected implementation.
  - `Replacement PR` should normally contain the new Pull Request number.

- **`Duplicate`**

  - Another Pull Request already contains the same or equivalent changes.
  - `Replacement PR` should reference the Pull Request that should be used instead.

- **`Needs rework`**

  - The pull request requires corrections and will be closed solely for repository cleanup.
  - It must be reopened—without creating a new branch—right before pushing from the local environment.

---

## Related Issue

References the Issue associated with the work performed in the Pull Request.

---

## Replacement PR

References another Pull Request that replaces or supersedes the current one.

---

## Next Steps

Describes what should happen after the Pull Request is closed.

---
