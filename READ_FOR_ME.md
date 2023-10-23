# GIT STEPS

```bash
git remote add origin URL_OF_FORK
git remote add upstream URL_OF_PROJECT
# Example : git remote add upstream https://github.com/scikit-learn/scikit-learn.git
git remote -v
git pull upstream master
git pull upstream main
git fetch upstream main
git merge upstream main
git checkout -b BRANCH_NAME
git branch
git add -A
git commit -m "DESCRIPTION OF CHANGES"
git push origin BRANCH_NAME
git rm -r --cached .
git branch -d BRANCH_NAME
# Delete branch when merge is successful
```

```bash
# In dev branch
git merge main # Merge main into dev to check if there are any conflicts
git add .
git commit -m "DESCRIPTION OF CHANGES"
git push -u origin development
# Merging with main
git checkout main
git merge dev
git push -u origin main
```
