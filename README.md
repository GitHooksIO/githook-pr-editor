#PR Editor
This GitHook appends the content of your choice to any new pull request.

It can be put to all manner of uses ([see examples](https://github.com/GitHooksIO/githook-pr-editor/tree/master/examples)), but the most obvious use case is a checklist.

## How it works
Let's say you install the githook-pr-editor GitHook to your HelloWorld repository, pointing to a template "checklist.md" whose contents are simply `- [ ] Yes, the code is good`.

Someone comes along and opens a Pull Request on your HelloWorld repository and sets the initial description to "Pull request for that thing".

This GitHook gets triggered, and in a few seconds the Pull Request description becomes:

---

Pull request for that thing.

- [ ] Yes, the code is good

---

## How to install
On the [githook-pr-editor page on GitHooks.io](http://githooks.io/githooks/GitHooksIO/githook-pr-editor), there's a big 'Install' button. All you need to do is provide a template to a markdown file which you want to append to the contents of every pull request.

This must be a fully qualified URL pointing directly to the raw markdown, e.g.

https://raw.githubusercontent.com/GitHooksIO/githook-pr-editor/master/examples/coding-checklist.md

We hope you find this useful!
