import { Storage } from "aws-amplify";

export async function s3Upload(file: File, oldFile?: string) {
    const filename = `${Date.now()}-${file.name}`;

    const stored = await Storage.vault.put(filename, file, {
        contentType: file.type
    })

    if (oldFile) {
        await Storage.vault.remove(oldFile);
    }

    return stored.key;
}

export async function s3Delete(file: string) {
    return await Storage.vault.remove(file);
}
