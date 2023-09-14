export function onError(error: any) {
    let message = String(error);

    if(!(error instanceof Error) && error.message) {
        message = error.message;
    }

    alert(message)
}
