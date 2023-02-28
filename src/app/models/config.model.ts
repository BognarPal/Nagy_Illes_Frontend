export interface Weapon {
    id: number;
    name: string;
    damage: number;
    attackSpeed: number;
}

export interface Enemy {
    id: number;
    name: string;
    maxHp: number;
    damage: number;
    energy: number;
    speed: number;
}

export interface Class {
    id: number;
    name: string;
    maxHp: number;
    damage: number;
    energy: number;
    speed: number;
}

export interface Artifact {
    id: number;
    name: string;
    maxLevel: number;
}

export interface ConfigModel {
    weapons: Weapon[];
    enemies: Enemy[];
    classes: Class[];
    artifacts: Artifact[];
}