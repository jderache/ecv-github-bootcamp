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

---
# Pulling changes from remote
- To update your local repository to the latest commit from the remote repository, use:
```console
git push origin main
```
- Replace `branch_name` with the name of the branch you want to pull from. If you’re working with the main branch, this is often `main` or `master`.

---
# Slide `text` with content
Some content...

---
# Slide `lists` with content
- Item 1
- Item 2
- Item 3

---
# Slide `images` with image

![Github](https://www.svgrepo.com/show/381657/github.svg)

---
# Slide `Headers & Quotes` with some content

## This is a Header

> This is a quote.
> - Author Name

---
# Slide `Code` with some code


```javascript
console.log('Hello, world!');

---
# Extras

## Advanced Tips
- **Tip 1:** Here's an advanced tip or trick that might be useful.
- **Tip 2:** Another insightful tip or lesser-known feature.

## Special Formatting
You can also use *italic*, **bold**, or `monospace` fonts for emphasis.

---
# How to automate issue closing

Great news! The issue can now close automatically!

---

## Julien Derache

![](https://raw.githubusercontent.com/flexbox/github-bootcamp/main/slides/github-bootcamp.png)

---
# How to apply commit
