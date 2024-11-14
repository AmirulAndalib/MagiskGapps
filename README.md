![alt text](https://raw.githubusercontent.com/wacko1805/wacko1805/main/MGM-LOGO-TEXT.png "Logo Title Text 1")
### MagiskGApps Maker converts a regular GApps package into a Magisk flashable package using a the [MagiskGApps.com](https://magiskgapps.com) site.

# How to use: 
- Download your desired GApps package from the [supported GApps packages](https://github.com/wacko1805/MagiskGapps?tab=readme-ov-file#supported-gapps-packages) Below
- Head to [MagiskGApps.com](https://magiskgapps.com):
    - Upload your file to the site
    - Select your GApps type
    - Generate the file, and wait for it to generate. Please note that this may take a very long time. PLEASE do not leave the tab while generating!
- Flash the file in the Magisk Manager and reboot!
    - Please note: depending on the GApps type and varient, an error may popup stating that "Device Setup has Stopped Working". Please disable the device setup app if this is happening. 
    - Some apps will stay installed if you remove the module. This is because when apps are updated, they may stay installed. These will not be installed as system apps, so they can be uninstalled afterwards.
- ### If you run into any issues:
    - Open an issue on Github, or comment on an already open issue if it exsists. 
    - Please state the following in your issue:
        - Your android version and rom 
        - The GApps Type and Version you uses
        - Your MagiskGApps Script version.
        This can be found in your MagiskGApps Zip file in the ``` MGM.txt ``` file. 
        - And than what issue you are facing. 
        - For example:
        ``` 
        Phone: Lineage OS 21 Android 14
        GApps: NikGapps-basic-arm64-14-20241104
        Script: NikGApps.r.1.4
        ```
    - Provide as much info in your issue. As this project uses a converter script, it can be hard to find if an issue is caused by the MagiskGApps script, or the original GApps file. As replicating an issue involves downloading and converting the GApps package installed, then installing the GApps package the original way. 

## Suggest GApps packages: https://github.com/wacko1805/MagiskGapps/labels/GApps%20Suggestion
# Supported GApps Packages:
- [NikGApps](https://nikgapps.com/)
- [MindTheGApps](https://mindthegapps.com/)
- Please recommend other GApps packages using the suggestion label in the issues tab, or https://github.com/wacko1805/MagiskGapps/labels/GApps%20Suggestion
# To Do:
- [x] Create a custom module.prop and install files using the original file names
- [ ] Add support for KernalSU and APatch
- [ ] Add support for more GApps types. (please reccomend other popular options!)
- [ ] potentially create an app to flash directly
## Known Issues:
- [ ] Will process zip through both NikGApps and MindTheGApps files if one radio button is selected, and then the other, causeing timeout error
- [x] NikGApps script leaves all files not needed for MagiskGApps functionality in the zip file
## This site uses my [Monet Web Adapter](https://github.com/wacko1805/MonetWebAdapter) project!
If you use an android device, installing the adapter app will allow your dynamic wallpaper colours to be used on the site.
[Learn more and download here](https://github.com/wacko1805/MonetWebAdapter)
