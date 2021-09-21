const packager = require('electron-packager');
const WinInstall = require('electron-winstaller');
const Debianinstaller = require('electron-installer-debian')

const common = {
    name: 'Organize',
    dir: './',
    out: 'dist',
    overwrite: true,
    asar: true
}

const linux = async () => {
    console.log('starting linux build');

    try{
        const appPaths = await packager({
            ...common,
            executableName: 'proton_org_app',
            platform: 'linux',
            arch: 'x64'
        });

        console.log(`✅ App build ready in: ${appPaths.join('\n')}, creating installer...`);

        await Debianinstaller({
            src: 'dist/Organize-linux-x64/',
            dest: 'dist/installers/debian',
            arch: 'amd64',
            icon: 'public/favicon.ico'
        });

        console.log('✅ Linux installer ready');
    }catch(err){
        console.log('Linux failed' + err);
    }
};
linux();

const windows = async () => {
    console.log('starting windows build');

    try{
        const appPaths = await packager({
            ...common,
            platform: 'win32',
            arch: 'ia32'
        });

        console.log(`✅ App build ready in: ${appPaths.join('\n')}, creating installer...`);

        await WinInstall.createWindowsInstaller({
            appDirectory: './dist/Organize-win32-ia32',
            outputDirectory: './dist/installers/windows',
            exe: 'Organize.exe'
        });

        console.log('✅ Windows installer ready');
    }
    catch(err){
        console.log('Windows failed' + err.message);
    }
};
windows();


//TODO macOS installer