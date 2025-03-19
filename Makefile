archive-result:
	(cd ../; tar cjvf react-todo-list.tbz --exclude react-todo-list/node_modules react-todo-list); mkdir -p react-todo-list/as-of-`git rev-parse HEAD`; 
	cp ../react-todo-list.tbz  react-todo-list/as-of-`git rev-parse HEAD`
	git add react-todo-list/as-of-`git rev-parse HEAD`

paste-and-commit:
	pbpaste > /tmp/commit-msg.txt
	git commit -F /tmp/commit-msg.txt

install-claude:
	cp CLAUDE.md ~/.claude

reset-project:
	rm -rf ~/git/projects/react-todo-list
	pbcopy < project-prompt.txt
	cd ~/git/projects/react-todo-list
	claude
