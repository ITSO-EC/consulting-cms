export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const body = useBody(event);
    
    try {
        
    const res = await $fetch(config.authApiURL+'register', {
        method: 'POST',
        headers:{'Content-type': 'application/json'},
        body: body
    });
    return res;
    
} catch (error) {
        console.error(error)
}

    
    
  })