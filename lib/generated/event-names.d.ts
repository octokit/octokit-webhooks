// DO NOT EDIT THIS FILE DIRECTLY
// make edits in scripts/generate-types.js

export namespace EventNames {
  const enum ErrorEvent {
    Default = "error"
  }

  const enum CheckRunEvent {
    Default = "check_run",
    Completed = "check_run.completed",
    Created = "check_run.created",
    RequestedAction = "check_run.requested_action",
    Rerequested = "check_run.rerequested"
  }

  const enum CheckSuiteEvent {
    Default = "check_suite",
    Completed = "check_suite.completed",
    Requested = "check_suite.requested",
    Rerequested = "check_suite.rerequested"
  }

  const enum CommitCommentEvent {
    Default = "commit_comment",
    Created = "commit_comment.created"
  }

  const enum ContentReferenceEvent {
    Default = "content_reference"
  }

  const enum CreateEvent {
    Default = "create"
  }

  const enum DeleteEvent {
    Default = "delete"
  }

  const enum DeployKeyEvent {
    Default = "deploy_key",
    Created = "deploy_key.created",
    Deleted = "deploy_key.deleted"
  }

  const enum DeploymentEvent {
    Default = "deployment",
    Created = "deployment.created"
  }

  const enum DeploymentStatusEvent {
    Default = "deployment_status",
    Created = "deployment_status.created"
  }

  const enum ForkEvent {
    Default = "fork"
  }

  const enum GithubAppAuthorizationEvent {
    Default = "github_app_authorization"
  }

  const enum GollumEvent {
    Default = "gollum"
  }

  const enum InstallationEvent {
    Default = "installation",
    Created = "installation.created",
    Deleted = "installation.deleted",
    NewPermissionsAccepted = "installation.new_permissions_accepted"
  }

  const enum InstallationRepositoriesEvent {
    Default = "installation_repositories",
    Added = "installation_repositories.added",
    Removed = "installation_repositories.removed"
  }

  const enum IssueCommentEvent {
    Default = "issue_comment",
    Created = "issue_comment.created",
    Deleted = "issue_comment.deleted",
    Edited = "issue_comment.edited"
  }

  const enum IssuesEvent {
    Default = "issues",
    Assigned = "issues.assigned",
    Closed = "issues.closed",
    Deleted = "issues.deleted",
    Demilestoned = "issues.demilestoned",
    Edited = "issues.edited",
    Labeled = "issues.labeled",
    Locked = "issues.locked",
    Milestoned = "issues.milestoned",
    Opened = "issues.opened",
    Pinned = "issues.pinned",
    Reopened = "issues.reopened",
    Transferred = "issues.transferred",
    Unassigned = "issues.unassigned",
    Unlabeled = "issues.unlabeled",
    Unlocked = "issues.unlocked",
    Unpinned = "issues.unpinned"
  }

  const enum LabelEvent {
    Default = "label",
    Created = "label.created",
    Deleted = "label.deleted",
    Edited = "label.edited"
  }

  const enum MarketplacePurchaseEvent {
    Default = "marketplace_purchase",
    Cancelled = "marketplace_purchase.cancelled",
    Changed = "marketplace_purchase.changed",
    PendingChange = "marketplace_purchase.pending_change",
    PendingChangeCancelled = "marketplace_purchase.pending_change_cancelled",
    Purchased = "marketplace_purchase.purchased"
  }

  const enum MemberEvent {
    Default = "member",
    Added = "member.added",
    Deleted = "member.deleted",
    Edited = "member.edited"
  }

  const enum MembershipEvent {
    Default = "membership",
    Added = "membership.added",
    Removed = "membership.removed"
  }

  const enum MetaEvent {
    Default = "meta",
    Deleted = "meta.deleted"
  }

  const enum MilestoneEvent {
    Default = "milestone",
    Closed = "milestone.closed",
    Created = "milestone.created",
    Deleted = "milestone.deleted",
    Edited = "milestone.edited",
    Opened = "milestone.opened"
  }

  const enum OrganizationEvent {
    Default = "organization",
    Deleted = "organization.deleted",
    MemberAdded = "organization.member_added",
    MemberInvited = "organization.member_invited",
    MemberRemoved = "organization.member_removed",
    Renamed = "organization.renamed"
  }

  const enum OrgBlockEvent {
    Default = "org_block",
    Blocked = "org_block.blocked",
    Unblocked = "org_block.unblocked"
  }

  const enum PackageEvent {
    Default = "package",
    Published = "package.published",
    Updated = "package.updated"
  }

  const enum PageBuildEvent {
    Default = "page_build"
  }

  const enum ProjectCardEvent {
    Default = "project_card",
    Converted = "project_card.converted",
    Created = "project_card.created",
    Deleted = "project_card.deleted",
    Edited = "project_card.edited",
    Moved = "project_card.moved"
  }

  const enum ProjectColumnEvent {
    Default = "project_column",
    Created = "project_column.created",
    Deleted = "project_column.deleted",
    Edited = "project_column.edited",
    Moved = "project_column.moved"
  }

  const enum ProjectEvent {
    Default = "project",
    Closed = "project.closed",
    Created = "project.created",
    Deleted = "project.deleted",
    Edited = "project.edited",
    Reopened = "project.reopened"
  }

  const enum PublicEvent {
    Default = "public"
  }

  const enum PullRequestEvent {
    Default = "pull_request",
    Assigned = "pull_request.assigned",
    Closed = "pull_request.closed",
    Edited = "pull_request.edited",
    Labeled = "pull_request.labeled",
    Locked = "pull_request.locked",
    Opened = "pull_request.opened",
    ReadyForReview = "pull_request.ready_for_review",
    Reopened = "pull_request.reopened",
    ReviewRequestRemoved = "pull_request.review_request_removed",
    ReviewRequested = "pull_request.review_requested",
    Unassigned = "pull_request.unassigned",
    Unlabeled = "pull_request.unlabeled",
    Unlocked = "pull_request.unlocked",
    Synchronize = "pull_request.synchronize"
  }

  const enum PullRequestReviewEvent {
    Default = "pull_request_review",
    Dismissed = "pull_request_review.dismissed",
    Edited = "pull_request_review.edited",
    Submitted = "pull_request_review.submitted"
  }

  const enum PullRequestReviewCommentEvent {
    Default = "pull_request_review_comment",
    Created = "pull_request_review_comment.created",
    Deleted = "pull_request_review_comment.deleted",
    Edited = "pull_request_review_comment.edited"
  }

  const enum PushEvent {
    Default = "push"
  }

  const enum ReleaseEvent {
    Default = "release",
    Created = "release.created",
    Deleted = "release.deleted",
    Edited = "release.edited",
    Prereleased = "release.prereleased",
    Published = "release.published",
    Unpublished = "release.unpublished"
  }

  const enum RepositoryDispatchEvent {
    Default = "repository_dispatch"
  }

  const enum RepositoryEvent {
    Default = "repository",
    Archived = "repository.archived",
    Created = "repository.created",
    Deleted = "repository.deleted",
    Edited = "repository.edited",
    Privatized = "repository.privatized",
    Publicized = "repository.publicized",
    Renamed = "repository.renamed",
    Transferred = "repository.transferred",
    Unarchived = "repository.unarchived"
  }

  const enum RepositoryImportEvent {
    Default = "repository_import"
  }

  const enum RepositoryVulnerabilityAlertEvent {
    Default = "repository_vulnerability_alert",
    Create = "repository_vulnerability_alert.create",
    Dismiss = "repository_vulnerability_alert.dismiss",
    Resolve = "repository_vulnerability_alert.resolve"
  }

  const enum SecurityAdvisoryEvent {
    Default = "security_advisory",
    Performed = "security_advisory.performed",
    Published = "security_advisory.published",
    Updated = "security_advisory.updated"
  }

  const enum SponsorshipEvent {
    Default = "sponsorship"
  }

  const enum StarEvent {
    Default = "star",
    Created = "star.created",
    Deleted = "star.deleted"
  }

  const enum StatusEvent {
    Default = "status"
  }

  const enum TeamEvent {
    Default = "team",
    AddedToRepository = "team.added_to_repository",
    Created = "team.created",
    Deleted = "team.deleted",
    Edited = "team.edited",
    RemovedFromRepository = "team.removed_from_repository"
  }

  const enum TeamAddEvent {
    Default = "team_add"
  }

  const enum WatchEvent {
    Default = "watch",
    Started = "watch.started"
  }
}
