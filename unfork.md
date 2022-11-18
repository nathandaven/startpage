# How to "unfork" a project in four easy steps:

1. git clone --bare https://github.com/{username}/{repository}
2. Delete original repository in https://github.com/{username}/{repository}/settings.
3. Create new repository with the name {repository} at https://github.com/new.
4. cd {repository}.git and git push --mirror https://github.com/{username}/{repository}
5. Profit
