const DEFAULT_PORT = 5000;

export interface Settings {
    port: number;
}

const settings: Settings = {
    port: Number(process.env.PORT) ?? DEFAULT_PORT,
};

export default settings;
