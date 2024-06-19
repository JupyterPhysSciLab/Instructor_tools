import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IMainMenu } from '@jupyterlab/mainmenu';
import { ICommandPalette } from '@jupyterlab/apputils';
import { MenuSvg } from '@jupyterlab/ui-components';
import { //INotebookModel,
    INotebookTools,
    //INotebookTracker
    } from '@jupyterlab/notebook';
//import { ICellModel } from '@jupyterlab/cells';

/**
 * Initialization data for the JPSLInstructorTools extension.
 */

 // Useful structure for defining commands to reuse info in menus and commandRegistry
 interface CmdandInfo {
     id: string;
     label: string;
     caption: string;
 }

const plugin: JupyterFrontEndPlugin<void> = {
  id: 'JPSLInstructorTools:plugin',
  description: 'Tool to assist instructors in creating notebook templates for student Jupyter worksheets.',
  autoStart: true,
  requires: [IMainMenu, ICommandPalette, INotebookTools
      ],
  activate: (app: JupyterFrontEnd,
      MainMenu: IMainMenu,
      palette: ICommandPalette,
      //notebookTracker: INotebookTracker,
      notebookTools: INotebookTools
      ) => {
    const { commands } = app;
    /**
    * Build the commands to add to the menu
     */
    // New Data Table
    const NewDataTable:CmdandInfo = {
        id: 'NewDataTable:JPSLInstructorTools:main-menu',
        label: 'Insert Data Entry Table...',
        caption:'Insert a new Data Entry Table'
    };
    commands.addCommand(NewDataTable.id, {
      label: NewDataTable.label,
      caption: NewDataTable.caption,
      execute: (args: any) => {
        console.log(
          `New Data Table has been called ${args['origin']}.`
        );
        window.alert(
          `New Data Table has been called ${args['origin']}.`
        );
      },
    });

    // Insert Green Start Bar
    const grnstart:CmdandInfo = {
        id: 'grnstart:JPSLInstructorTools:main-menu',
        label: 'Insert green start bar',
        caption: 'Insert green start bar in a markdown cell.'
    };
    commands.addCommand(grnstart.id, {
      label: grnstart.label,
      caption: grnstart.caption,
      execute: (args: any) => {
        console.log(
          `Insert green start bar has been called ${args['origin']}.`
        );
        window.alert(
          `Insert green start bar has been called ${args['origin']}.`
        );
      },
    });

    // Insert Brown Stop Bar
    const brnstop:CmdandInfo = {
        id:'brnstop:JPSLInstructorTools:main-menu',
        label: 'Insert brown stop bar',
        caption: 'Insert brown stop bar in a markdown cell.'
    };
    commands.addCommand(brnstop.id, {
      label: brnstop.label,
      caption: brnstop.caption,
      execute: (args: any) => {
        console.log(
          `Insert Insert brown stop bar has been called ${args['origin']}.`
        );
        window.alert(
          `Insert Insert brown stop bar has been called ${args['origin']}.`
        );
      },
    });

    // Insert left cyan highlight
    const cyanhighlight:CmdandInfo = {
        id:'cyanhighlight:JPSLInstructorTools:main-menu',
        label: 'Insert left cyan highlight',
        caption: 'Insert left cyan highlight in a markdown cell.'
    };
    commands.addCommand(cyanhighlight.id, {
      label: cyanhighlight.label,
      caption: cyanhighlight.caption,
      execute: (args: any) => {
        console.log(
          `Insert left cyan highlight has been called ${args['origin']}.`
        );
        window.alert(
          `Insert left cyan highlight has been called ${args['origin']}.`
        );
      },
    });

    // Insert left red highlight
    const redhighlight:CmdandInfo = {
        id: 'redhighlight:JPSLInstructorTools:main-menu',
        label: 'Insert left red highlight',
        caption: 'Insert left red highlight in a markdown cell.'
    };
    commands.addCommand(redhighlight.id, {
      label: redhighlight.label,
      caption: redhighlight.caption,
      execute: (args: any) => {
        console.log(
          `Insert left red highlight has been called ${args['origin']}.`
        );
        window.alert(
          `Insert left red highlight has been called ${args['origin']}.`
        );
      },
    });

    // Protect Selected Cells
    const protectcells:CmdandInfo = {
        id: 'protectcells:JPSLInstructorTools:main-menu',
        label: 'Protect selected cells',
        caption: 'Protect selected cells'
    };
    commands.addCommand(protectcells.id, {
      label: protectcells.label,
      caption: protectcells.caption,
      execute: () => {
        if (notebookTools.selectedCells.length >=1){
            for (const cell of notebookTools.selectedCells){
                cell.model.setMetadata("editable", "false");
                }
            }
        console.log(
          `Protect selected cells has been called.`
        );
        window.alert(
          `Protect selected cells has been called.`
        );
      },
    });

    // Deprotect Selected Cells
    const deprotectcells:CmdandInfo = {
        id: 'deprotectcells:JPSLInstructorTools:main-menu',
        label: 'Deprotect selected cells',
        caption: 'Deprotect selected cells'
    };
    commands.addCommand(deprotectcells.id, {
      label: deprotectcells.label,
      caption: deprotectcells.caption,
      execute: (args: any) => {
        console.log(
          `Deprotect selected cells has been called ${args['origin']}.`
        );
        window.alert(
          `Deprotect selected cells has been called ${args['origin']}.`
        );
      },
    });

    // Indicate Protected Cells
    const indicateprotectcells:CmdandInfo = {
        id: 'indicateprotectcells:JPSLInstructorTools:main-menu',
        label: 'Indicate protected cells',
        caption: 'Indicate protected cells'
    };
    commands.addCommand(indicateprotectcells.id, {
      label: indicateprotectcells.label,
      caption: indicateprotectcells.caption,
      execute: (args: any) => {
        console.log(
          `Indicate protected cells has been called ${args['origin']}.`
        );
        window.alert(
          `Indicate protected cells has been called ${args['origin']}.`
        );
      },
    });

    // Mark Cells To Hide Before Printing
    const sethidecellbeforeprint:CmdandInfo = {
        id: 'sethidecellbeforeprint:JPSLInstructorTools:main-menu',
        label: 'Allow hiding of selected cells',
        caption: 'Sets the hide before printing flag of the selected cells.'
    };
    commands.addCommand(sethidecellbeforeprint.id, {
      label: sethidecellbeforeprint.label,
      caption: sethidecellbeforeprint.caption,
      execute: (args: any) => {
        console.log(
          `Allow hiding of selected cells has been called ${args['origin']}.`
        );
        window.alert(
          `Allow hiding of selected cells has been called ${args['origin']}.`
        );
      },
    });

    // Unset Cells To Hide Before Printing
    const unsethidecellbeforeprint:CmdandInfo = {
        id: 'unsethidecellbeforeprint:JPSLInstructorTools:main-menu',
        label: 'Disallow hiding of selected cells',
        caption: 'Unsets the hide before printing flag of the selected cells.'
    };
    commands.addCommand(unsethidecellbeforeprint.id, {
      label: unsethidecellbeforeprint.label,
      caption: unsethidecellbeforeprint.caption,
      execute: (args: any) => {
        console.log(
          `Disallow hiding of selected cells has been called ${args['origin']}.`
        );
        window.alert(
          `Disallow hiding of selected cells has been called ${args['origin']}.`
        );
      },
    });

    // Indicate hide before print cells
    const indicatehidecellbeforeprint:CmdandInfo = {
        id: 'indicatehidecellbeforeprint:JPSLInstructorTools:main-menu',
        label: 'Indicate hide before print cells',
        caption: 'Indicates hide before print cells.'
    };
    commands.addCommand(indicatehidecellbeforeprint.id, {
      label: indicatehidecellbeforeprint.label,
      caption: indicatehidecellbeforeprint.caption,
      execute: (args: any) => {
        console.log(
          `Indicate hide before print cells has been called ${args['origin']}.`
        );
        window.alert(
          `Indicate hide before print cells has been called ${args['origin']}.`
        );
      },
    });

    // Mark cells to hide code before printing
    const sethidecodebeforeprint:CmdandInfo = {
        id: 'sethidecodebeforeprint:JPSLInstructorTools:main-menu',
        label: 'Allow hiding of code',
        caption: 'Set hide code before print flag for selected cells.'
    };
    commands.addCommand(sethidecodebeforeprint.id, {
      label: sethidecodebeforeprint.label,
      caption: sethidecodebeforeprint.caption,
      execute: (args: any) => {
        console.log(
          `Allow hiding of code before print has been called ${args['origin']}.`
        );
        window.alert(
          `Allow hiding of code before print has been called ${args['origin']}.`
        );
      },
    });

    // Unset cells to hide code before printing
    const unsethidecodebeforeprint:CmdandInfo = {
        id: 'unsethidecodebeforeprint:JPSLInstructorTools:main-menu',
        label: 'Disallow hiding of code',
        caption: 'Unset hide code before print flag for selected cells.'
    };
    commands.addCommand(unsethidecodebeforeprint.id, {
      label: unsethidecodebeforeprint.label,
      caption: unsethidecodebeforeprint.caption,
      execute: (args: any) => {
        console.log(
          `Disallow hiding of code before print has been called ${args['origin']}.`
        );
        window.alert(
          `Disallow hiding of code before print has been called ${args['origin']}.`
        );
      },
    });

    // Indicate hide code before printing cells
    const indicatehidecodebeforeprint:CmdandInfo = {
        id: 'indicatehidecodebeforeprint:JPSLInstructorTools:main-menu',
        label: 'Indicate hide code before print cells',
        caption: 'Indicate hide code before print cells.'
    };
    commands.addCommand(indicatehidecodebeforeprint.id, {
      label: indicatehidecodebeforeprint.label,
      caption: indicatehidecodebeforeprint.caption,
      execute: (args: any) => {
        console.log(
          `Indicate hide code before print cells has been called ${args['origin']}.`
        );
        window.alert(
          `Indicate hide code before print cells has been called ${args['origin']}.`
        );
      },
    });

    // Test hide before print
    const tsthidebeforeprint:CmdandInfo = {
        id: 'tsthidebeforeprint:JPSLInstructorTools:main-menu',
        label: 'Test hide before print',
        caption: 'Test hide before print.'
    };
    commands.addCommand(tsthidebeforeprint.id, {
      label: tsthidebeforeprint.label,
      caption: tsthidebeforeprint.caption,
      execute: (args: any) => {
        console.log(
          `Test hide before print has been called ${args['origin']}.`
        );
        window.alert(
          `Test hide before print has been called ${args['origin']}.`
        );
      },
    });

    // Undo hide before print
    const undohidebeforeprint:CmdandInfo = {
        id: 'undohidebeforeprint:JPSLInstructorTools:main-menu',
        label: 'Undo hide before print',
        caption: 'Undo hide before print.'
    };
    commands.addCommand(undohidebeforeprint.id, {
      label: undohidebeforeprint.label,
      caption: undohidebeforeprint.caption,
      execute: (args: any) => {
        console.log(
          `Undo hide before print has been called ${args['origin']}.`
        );
        window.alert(
          `Undo hide before print has been called ${args['origin']}.`
        );
      },
    });

    // Set hide code in JPSL
    const sethidecodeJPSL:CmdandInfo = {
        id: 'sethidecodeJPSL:JPSLInstructorTools:main-menu',
        label: 'Set hide code in JPSL',
        caption: 'Set hide code in JPSL flag for selected cells.'
    };
    commands.addCommand(sethidecodeJPSL.id, {
      label: sethidecodeJPSL.label,
      caption: sethidecodeJPSL.caption,
      execute: (args: any) => {
        console.log(
          `Set hide code in JPSL has been called ${args['origin']}.`
        );
        window.alert(
          `Set hide code in JPSL has been called ${args['origin']}.`
        );
      },
    });

    // Unset hide code in JPSL
    const unsethidecodeJPSL:CmdandInfo = {
        id: 'unsethidecodeJPSL:JPSLInstructorTools:main-menu',
        label: 'Unset hide code in JPSL',
        caption: 'Unset hide code in JPSL flag for selected cells.'
    };
    commands.addCommand(unsethidecodeJPSL.id, {
      label: unsethidecodeJPSL.label,
      caption: unsethidecodeJPSL.caption,
      execute: (args: any) => {
        console.log(
          `Unset hide code in JPSL has been called ${args['origin']}.`
        );
        window.alert(
          `Unset hide code in JPSL has been called ${args['origin']}.`
        );
      },
    });

    // Indicate hide code in JPSL
    const indicatehidecodeJPSL:CmdandInfo = {
        id: 'indicatehidecodeJPSL:JPSLInstructorTools:main-menu',
        label: 'Indicate hide code in JPSL cells',
        caption: 'Indicate hide code in JPSL cells.'
    };
    commands.addCommand(indicatehidecodeJPSL.id, {
      label: indicatehidecodeJPSL.label,
      caption: indicatehidecodeJPSL.caption,
      execute: (args: any) => {
        console.log(
          `Indicate hide code in JPSL cells has been called ${args['origin']}.`
        );
        window.alert(
          `Indicate hide code in JPSL cells has been called ${args['origin']}.`
        );
      },
    });

// Activate Instructor Tools Menu
    const activateinstructormenu:CmdandInfo = {
        id: 'activateinstructormenu:JPSLInstructorTools:main-menu',
        label: 'Activate menu',
        caption: 'Activate the Instructor Tools menu.'
    };
    commands.addCommand(activateinstructormenu.id, {
      label: activateinstructormenu.label,
      caption: activateinstructormenu.caption,
      execute: (args: any) => {
        console.log(
          `Activate menu has been called ${args['origin']}.`
        );
        window.alert(
          `Activate menu has been called ${args['origin']}.`
        );
      },
    });

    // Deactivate Instructor Tools Menu
    const deactivateinstructormenu:CmdandInfo = {
        id: 'deactivateinstructormenu:JPSLInstructorTools:main-menu',
        label: 'Deactivate menu',
        caption: 'Deactivate the Instructor Tools menu.'
    };
    commands.addCommand(deactivateinstructormenu.id, {
      label: deactivateinstructormenu.label,
      caption: deactivateinstructormenu.caption,
      execute: (args: any) => {
        console.log(
          `Deactivate menu has been called ${args['origin']}.`
        );
        window.alert(
          `Deactivate menu has been called ${args['origin']}.`
        );
      },
    });

    // Disallow Instructor Tools Menu with this Notebook
    const disallowinstructormenu:CmdandInfo = {
        id: 'disallowinstructormenu:JPSLInstructorTools:main-menu',
        label: 'Disallow menu in Notebook',
        caption: 'Prevent use of the Instructor Tools menu with this Notebook.'
    };
    commands.addCommand(disallowinstructormenu.id, {
      label: disallowinstructormenu.label,
      caption: disallowinstructormenu.caption,
      execute: (args: any) => {
        console.log(
          `Disallow menu in Notebook has been called ${args['origin']}.`
        );
        window.alert(
          `Disallow menu in Notebook has been called ${args['origin']}.`
        );
      },
    });

    // Add selected commands to the command palette
    palette.addItem({
      command: activateinstructormenu.id,
      category: 'JPSL Instructor Tools',
      args: { origin: 'from the palette' },
    });

    palette.addItem({
      command: deactivateinstructormenu.id,
      category: 'JPSL Instructor Tools',
      args: { origin: 'from the palette' },
    });

    palette.addItem({
      command: disallowinstructormenu.id,
      category: 'JPSL Instructor Tools',
      args: { origin: 'from the palette' },
    });

/*
    // Add a menu using the settings settingRegistry
    settingRegistry.load(extension.id);
*/
    /**
    * Create the menu that exposes the commands
     */

     /** submenus */

     // Protect cell submenu
     const protectsubmenu = new MenuSvg({commands});
     protectsubmenu.title.label = 'Cell Locking'

     protectsubmenu.addItem({
         command: protectcells.id,
         args: {label: protectcells.label, caption: protectcells.caption}
         });
     protectsubmenu.addItem({
         command: deprotectcells.id,
         args: {label: deprotectcells.label, caption: deprotectcells.caption}
         });
     protectsubmenu.addItem({
         command: indicateprotectcells.id,
         args: {label: indicateprotectcells.label, caption: indicateprotectcells.caption}
         });

     // Markdown cell highlighting menu
     const mkdownsubmenu = new MenuSvg({commands});
     mkdownsubmenu.title.label = 'Markdown Cell Highlighting'
     mkdownsubmenu.addItem({
         command: grnstart.id,
         args: {label: grnstart.label, caption: grnstart.caption}
     });
     mkdownsubmenu.addItem({
         command: brnstop.id,
         args: {label: brnstop.label, caption: brnstop.caption}
     });
     mkdownsubmenu.addItem({
         command: cyanhighlight.id,
         args: {label: cyanhighlight.label, caption: cyanhighlight.caption}
     });
     mkdownsubmenu.addItem({
         command: redhighlight.id,
         args: {label: redhighlight.label, caption: redhighlight.caption}
     });

     // Hide before printing submenu
     const hidebeforeprintsubmenu = new MenuSvg({commands});
     hidebeforeprintsubmenu.title.label = 'Hide before printing'
     hidebeforeprintsubmenu.addItem({
         command: sethidecellbeforeprint.id,
         args: {label: sethidecellbeforeprint.label, caption: sethidecellbeforeprint.caption}
     });
     hidebeforeprintsubmenu.addItem({
         command: unsethidecellbeforeprint.id,
         args: {label: unsethidecellbeforeprint.label, caption: unsethidecellbeforeprint.caption}
     });
     hidebeforeprintsubmenu.addItem({
         command: indicatehidecellbeforeprint.id,
         args: {label: indicatehidecellbeforeprint.label, caption: indicatehidecellbeforeprint.caption}
     });
     hidebeforeprintsubmenu.addItem({
         command: sethidecodebeforeprint.id,
         args: {label: sethidecodebeforeprint.label, caption: sethidecodebeforeprint.caption}
     });
     hidebeforeprintsubmenu.addItem({
         command: unsethidecodebeforeprint.id,
         args: {label: unsethidecodebeforeprint.label, caption: unsethidecodebeforeprint.caption}
     });
     hidebeforeprintsubmenu.addItem({
         command: indicatehidecodebeforeprint.id,
         args: {label: indicatehidecodebeforeprint.label, caption: indicatehidecodebeforeprint.caption}
     });
     hidebeforeprintsubmenu.addItem({
         command: tsthidebeforeprint.id,
         args: {label: tsthidebeforeprint.label, caption: tsthidebeforeprint.caption}
     });
      hidebeforeprintsubmenu.addItem({
         command: undohidebeforeprint.id,
         args: {label: undohidebeforeprint.label, caption: undohidebeforeprint.caption}
     });

    // Hide code in JPSL submenu
     const JPSLhidecodesubmenu = new MenuSvg({commands});
     JPSLhidecodesubmenu.title.label = 'Hide code in JPSL'
     JPSLhidecodesubmenu.addItem({
         command: sethidecodeJPSL.id,
         args: {label: sethidecodeJPSL.label, caption: sethidecodeJPSL.caption}
     });
     JPSLhidecodesubmenu.addItem({
         command: unsethidecodeJPSL.id,
         args: {label: unsethidecodeJPSL.label, caption: unsethidecodeJPSL.caption}
     });
     JPSLhidecodesubmenu.addItem({
         command: indicatehidecodeJPSL.id,
         args: {label: indicatehidecodeJPSL.label, caption: indicatehidecodeJPSL.caption}
     });


    // Add the menu using API
    const menu = new MenuSvg({ commands });
    menu.title.label = 'JPSL Instructor Tools';
    menu.addClass('jp-JPSLInstructor-tools-menu'); // This only gets added to the popup when it is active.
    menu.addItem({
         command: NewDataTable.id,
         args: {label: NewDataTable.label, caption: NewDataTable.caption}
     });

    menu.addItem({
         type: "submenu",
         args: {label: protectsubmenu.title.label},
         submenu: protectsubmenu
     });
    menu.addItem({
         type: "submenu",
         submenu: mkdownsubmenu,
         args: {label: mkdownsubmenu.title.label}
     });
    menu.addItem({
         type: "submenu",
         submenu: hidebeforeprintsubmenu,
         args: {label: hidebeforeprintsubmenu.title.label}
     });
    menu.addItem({
         type: "submenu",
         submenu: JPSLhidecodesubmenu,
         args: {label: JPSLhidecodesubmenu.title.label}
     });

    // open documentation url
    menu.addItem({
        command: 'help:open',
        args:{text: "Instructor Tools Docs",
        url:"https://github.com/JupyterPhysSciLab/jupyter-instructortools",
        newBrowserTab:"true"}
    });
    MainMenu.addMenu(menu);

    // disable the menu and hide title.
    const hidemenu:CmdandInfo = {
        id: 'Hide:JPSLInstructorTools:main-menu',
        label: 'Hide Menu',
        caption: 'Hide Menu'
    };
    commands.addCommand (hidemenu.id, {
        label: hidemenu.label,
        caption: hidemenu.caption,
        execute: () => {
            menu.hide();
            const mainmenuDOM = document.getElementById('jp-MainMenu');
            if (mainmenuDOM) {
                //window.alert(mainmenuDOM.toString());
                const mainmenulabels = mainmenuDOM.querySelectorAll('.lm-MenuBar-item');
                for (const item of mainmenulabels){
                    const itemlabel = item.querySelector('.lm-MenuBar-itemLabel');
                    if (itemlabel){
                        if (itemlabel.innerHTML == 'JPSL Instructor Tools') {
                            item.setAttribute('hidden','true');
                        }
                    }
                }
            } else {
               window.alert('Did not find the Main menu DOM element!');
            }
        },
    });

    palette.addItem({
        command: hidemenu.id,
        category: 'JPSL Instructor Tools',
        args: { origin: 'from the palette' }
    });

    // Enable the menu and show the title.
    const showmenu:CmdandInfo = {
        id: 'Show:JPSLInstructorTools:main-menu',
        label: 'Show Menu',
        caption: 'Show Menu'
    };
    commands.addCommand (showmenu.id, {
        label: showmenu.label,
        caption: showmenu.caption,
        execute: () => {
            menu.show();
            const mainmenuDOM = document.getElementById('jp-MainMenu');
            if (mainmenuDOM) {
                const mainmenulabels = mainmenuDOM.querySelectorAll('.lm-MenuBar-item');
                for (const item of mainmenulabels){
                    const itemlabel = item.querySelector('.lm-MenuBar-itemLabel');
                    if (itemlabel){
                        if (itemlabel.innerHTML == 'JPSL Instructor Tools') {
                            item.removeAttribute('hidden');
                        }
                    }
                }
            }
        },
    });

    palette.addItem({
        command: showmenu.id,
        category: 'JPSL Instructor Tools',
        args: { origin: 'from the palette' }
    });
    console.log('JupyterLab extension JPSLInstructorTools is activated!');
  }
};

export default plugin;
