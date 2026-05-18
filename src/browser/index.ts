import { name } from '../../package.json' with { type: 'json' };

export const methods = {
    async open() {
        Editor.Panel.open(name);
    },
    getVersion() {
        return Editor.App.version;
    },
    async rotateCamera(num = 10) {
        const result = await Editor.Message.request('scene', 'execute-scene-script', {
            name,
            method: 'rotateCamera',
            args: [num],
        });
        console.log(`rotateCamera result: ${result}`);
        return result;
    },
};

export async function load() {
    console.log(`load ${name}`);
}

export function unload() {
    console.log(`unload ${name}`);
}
