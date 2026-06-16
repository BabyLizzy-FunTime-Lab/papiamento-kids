import {modalController} from "@ionic/vue";
import BaseParentGateModal from "@/components/base/BaseParentGateModal.vue";

export function useParentGateModal () {
    const openParentGateModal = async () => {
        const modal = await modalController.create({
            component: BaseParentGateModal,
        });

        await modal.present();

        const {role} = await modal.onWillDismiss();

        return role === "confirm";
    }
    return {
        openParentGateModal,
    };
}
