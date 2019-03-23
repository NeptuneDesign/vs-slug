const vscode = require('vscode');
const slugify = require("@sindresorhus/slugify");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	context.subscriptions.push(vscode.commands.registerCommand('vs-slug.slugify', slugifySelection));
}
exports.activate = activate;

function slugifySelection() {
	if (vscode.window.activeTextEditor) {
		vscode.window.activeTextEditor.edit(function (editBuilder) {
			vscode.window.activeTextEditor.selections.forEach(function(element) {
				let config = vscode.workspace.getConfiguration('vs-slug');
				let selectedText = vscode.window.activeTextEditor.document.getText(element);
				editBuilder.replace(element, slugify(selectedText, {
					customReplacements: config.get('customReplacements'),
					decamelize: config.get('decamelize'),
					lowercase: config.get('lowercase'),
					separator: config.get('separator')
				}));
			});
		});
	}
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
