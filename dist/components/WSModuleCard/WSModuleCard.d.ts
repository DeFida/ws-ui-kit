import { FC } from 'react';
type ModuleType = {
    _id: string;
    name: string;
    duration: number;
    previewImage: string;
};
interface ModuleCardProp {
    module: ModuleType;
    className?: string;
    onClick: () => void;
}
declare const WSModuleCard: FC<ModuleCardProp>;
export default WSModuleCard;
