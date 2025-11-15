console.log("--- safeAwait (never crashes your test) ---");
async function safeAwait(promise){
    try{
        const result = await promise;
        return { ok: true, result };
    } catch (error) {
        return { ok: false, error };
    }
}

async function exampleFail(){
    throw new Error("Something failed");
}

const response = await safeAwait(exampleFail());
console.log(response);
