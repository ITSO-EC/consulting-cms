<script setup>
const props = defineProps(['pdfsrc']);    
let filename = props.pdfsrc?.split('file_url-')
filename = filename[filename.length - 1]
onMounted(()=> {
    const config = useRuntimeConfig();
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.src = "https://documentcloud.adobe.com/view-sdk/viewer.js";
    document.body.appendChild(script1);

    document.addEventListener("adobe_dc_view_sdk.ready", function()
    {
        var adobeDCView = new AdobeDC.View({clientId: config.public.PDF_API_KEY, divId: "adobe-dc-view"});
        adobeDCView.previewFile(
       {
          content:   {location: {url: props.pdfsrc}},
          metaData: {fileName: filename}
       });
    });

    
})

</script>
<template>
    <div></div>
</template>

