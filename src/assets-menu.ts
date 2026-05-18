
// 资源管理器-右键菜单

import { AssetInfo } from "@cocos/creator-types/editor/packages/asset-db/@types/public";

// Assets->右键菜单->Create->创建资源
export function onCreateMenu(assetInfo: AssetInfo) {
    // 按右键的时候，就调用
    console.log('Assets menu created');
    return [
        {
            label: 'i18n:d7kj-cocos-extension.assets-menu.createAsset',
            click() {
                if(!assetInfo){
                    console.warn('No asset info provided for menu item click');
                    return;
                }

                console.log('Create asset menu item clicked', assetInfo);
            }
        }
    ];
}
