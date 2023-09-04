import { FC } from 'react';
interface WSModal {
    message: string;
    title: string;
    onClose: () => void;
}
declare const WSModal: FC<WSModal>;
export default WSModal;
