--- { "layout" : "center" }
# github-bootcamp

---
# How to Initialize a New Repository
```console
git init
```
---
# How to review changes
Start by checking the status of your files:
```console
git status
```
Then use...
```console
git diff
```
---
# How to commit changes

```console
git add README.md
git commit -m "Initial commit"
```
---
# Create a new branch

```console
git checkout -b feature/branching
```
---
# Work on a Branch

### Make Changes
Edit, add, and modify your files as needed.
Add your changes to staging:
```console
git add .
git checkout -b feature/branching
```

---
# Merge branch on ```main```

Ensure you are on the main branch:
```console
git checkout main

```
Then merge
```console
git merge feature/branching
```
Push changes 
```console
git push
```
--- 
# Delete a branch

- Delete the Local Branch
> After merging, you can delete the local branch:
```console
git branch -d feature/branching
```

---
# Pushing changes to remote

Push your commits to the remote repository. Use:
```console
git push origin main
```

