import fs from 'fs';

interface EnvConfig {
    [key: string]: string | undefined;
}

/**
 * 读取环境变量文件
 * @param filePath 文件地址
 */
function parseEnvFile(filePath: string): EnvConfig {
    try {
        // 读取环境变量文件内容
        const content = fs.readFileSync(filePath, 'utf8');

        // 将内容按行拆分并处理
        const envConfig: EnvConfig = {};
        content.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                envConfig[key.trim()] = value.trim();
            }
        });

        return envConfig;
    } catch (err) {
        console.error(`读取环境变量文件 ${filePath} 时出错:`, err);
        return {};
    }
}

/**
 * 获取环境配置文件值
 * 通过传入 key 获取 .env 文件值或者指定文件的值
 * @param key 配置键
 * @param filename 环境配置文件名
 */
export const env = (key: string, filename?: string): string | number | undefined => {
    const config = parseEnvFile(filename || '.env');
    return config[key];
}