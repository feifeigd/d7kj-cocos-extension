
import { Camera, Node, director, Vec3 } from "cc";

function findCameraNode(root: Node | null): Node | null {
    if (!root) {
        return null;
    }

    if (root.getComponent(Camera)) {
        return root;
    }

    for (const child of root.children) {
        const found = findCameraNode(child);
        if (found) {
            return found;
        }
    }

    return null;
}

function load() {
    console.log(`Scene extension loaded, ${Editor.App.path}`);
}

function unload() {
    console.log('Scene extension unloaded');
}

const methods = {
    /**
     * 绕Y轴旋转 Main Camera，num 是旋转的角度，单位是度
     * @param num 
     */
    rotateCamera(num: number) {
        console.log(`rotateCamera called with num: ${num}`);
        if (typeof num !== 'number') {
            num = parseFloat(num);
        }
        if (isNaN(num)) {
            num = 10;
        }

        const scene = director.getScene();
        console.log(`Current scene: ${scene?.name}`);
        const cameraNode = findCameraNode(scene);

        if (cameraNode) {
            const euler = new Vec3();
            const {x, y, z} = cameraNode.eulerAngles;
            euler.set(x, y, z + num);
            cameraNode.setRotationFromEuler(euler);
            return true;
        }

        console.warn('No node with Camera component was found in the current scene.');

        return false;
    }
}

export default {
    load,
    unload,
    methods,
};
