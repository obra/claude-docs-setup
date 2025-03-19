archive-result:
	(cd ../; tar cjvf react-todo-list.tbz --exclude react-todo-list/node_modules react-todo-list); mkdir -p react-todo-list/as-of-`git rev-parse HEAD`; cp ../react-todo-list.tbz  react-todo-list/as-of-`git rev-parse HEAD`
