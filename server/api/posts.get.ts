export default defineEventHandler(async (event) => {
    const query = useQuery(event);
    const config = useRuntimeConfig();
    if(!query.byCategory)
    {

      const answer = await $fetch(config.baseApiURL+'posts');
      return answer
    }
    else {
      return await $fetch(config.baseApiURL+'posts?byCategory='+query.byCategory)
    }
    
    
  })