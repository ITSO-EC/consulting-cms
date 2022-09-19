export default defineEventHandler(async (event) => {
    const query = useQuery(event);
    const config = useRuntimeConfig();
    if(!query.byPage)
    {
      const answer = await $fetch(config.baseApiURL+'categories');
      return answer
    }
    else {
      return await $fetch(config.baseApiURL+'categories?byPage='+query.byPage)
    }
  })