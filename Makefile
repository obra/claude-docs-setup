archive-result:
	(cd ../; tar cjvf react-todo-list.tbz --exclude \*/node_modules react-todo-list); mkdir -p react-todo-list/as-of-`git rev-parse HEAD`; 
	cp ../react-todo-list.tbz  react-todo-list/as-of-`git rev-parse HEAD`
	git add react-todo-list/as-of-`git rev-parse HEAD`

paste-and-commit:
	pbpaste >> commit-msg.txt
	git commit -F commit-msg.txt && rm commit-msg.txt

install-claude:
	cp CLAUDE.md ~/.claude
	cp 0000-issue-template.md ~/.claude
	cp commands/* ~/.claude/commands/

reset-project: install-claude
	rm -rf ~/git/projects/react-todo-list
	pbcopy < project-prompt.txt
	mkdir -p ~/git/projects/react-todo-list
	cd ~/git/projects/react-todo-list && claude
