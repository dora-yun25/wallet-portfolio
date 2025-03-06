import fse from 'type-fs-extra';

export function initialize() {
    return fse.register("%url%");
}