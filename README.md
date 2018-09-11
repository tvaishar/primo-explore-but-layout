# primo-explore-but-layout

##Facets to the left
Moves facets to the left. Taken from https://github.com/ExLibrisGroup/primo-explore-package/tree/master/VIEW_CODE/css, also adds background color to facets and creates slight left padding. Shrinking of facets pane
was adjusted too. It is wide enough on "standard width devices" to display whole terms (without ...). 

##Citation first
Adjusts the bar with export options - citation first, hide redundant.

##Results count
Adds a little margin to results count so it won't interfere with page number.

##Hide
Anything that needs to be hidden:
* personalize results

##Footer
Adds footer structure (js + html + css). Footer.html has to be copied to the main html directory of the view.

##Before - After
Sometimes it is useful to actually have the content generated by css (namely by before and after selectors)

##Consts
Includes js file with definition of system-wide vars/consts. Naming convention is there to ensure loading this file first. Or at least before the vars are used.

##Logo
Simple css to style but logo + logo image itself. You have to manually copy the logo image into the correct folder.
Just copy the `./img/library-logo.png` from the package to the `img` folder of Primo NUI.

##Home
Home page in czech and english. Includes some css stanzas but mainly html documents to be loaded into Primo NUI. 
Includes html templates of individual tips and twitter integration.
To install copy the the content of `html` directory to `html` directory of the view.

##Colors
Basic color definitions and additional color-related styles for Brno University of Technology NUI scheme. Contains css file with styles and
`colors.json` with definitions of basic colors in the scheme. This file has to be copied to the view root and actual basic color styles css 
has to be generated by running `gulp app-css --view <your-view/folder code>` from the development environment root.

##Layout
Generic layout css. But many layout related directives are also scattered around in other css files.

##Citace PRO
_Citace PRO_ service integration. This solution replaces standard Primo bib. citation solution with [_Citace PRO_](https://www.citace.com/) service. This service is integrated via `<iframe>` element.

New solution is bound to `<prm-citation-after>`, while the original solution is hidden by css. Data from parent controller
(`<prm-citation>`) are parsed and transformed into the openURL call of _Citace PRO_ service (see [specification](https://docs.google.com/document/d/1O750bnggE5e22EU22gIP170Psa_I-YT31FjNB1VYTM0)). 

The data come mostly from `$vm.vm.parentCtrl.item.pnx.addata` and some from `$vm.vm.parentCtrl.item.pnx.display`.

The `<iframe>` is sanitized with [AngularJS SCE](https://docs.angularjs.org/api/ng/service/$sce).