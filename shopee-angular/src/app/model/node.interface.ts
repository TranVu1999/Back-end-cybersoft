export interface NodeInterface {
    typeNode: 'element' | 'text';
    tag?: 'div' | 'img' | 'p' | 'a' | 'h1' | 'iframe';
    className?: string [];
    nodes?: NodeInterface [];
    textContent?: TextNodeInterface;
    attributes?: AttributesInterface;
    styles?: StylesInterface;
}

export interface TextContentInterface {
    content: string;
    isDefault: boolean;
}

export interface TextNodeInterface {
    [key: string]: TextContentInterface;
}

export interface AttributesInterface {
    [key: string]: string;
}

export interface StylesInterface {
    [key: string]: string;
}


