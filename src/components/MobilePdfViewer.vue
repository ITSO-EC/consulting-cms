<script>
import VuePdfEmbed from 'vue-pdf-embed'
const proxyUrl = 'https://cryptic-dawn-02543.herokuapp.com/'
export default {
    components: {
        VuePdfEmbed
    },
   data() {
    return {
      isLoading: true,
      page: 1,
      pageCount: 1,
      pdfSource: `${proxyUrl}https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`,
      downloadSource: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`,
    }
  },
  methods: {
    handleDocumentRender() {
      this.isLoading = false
      this.pageCount = this.$refs.pdfRef.pageCount
    
    },
    handlePasswordRequest(callback, retry) {
      callback(prompt(retry
        ? 'Enter password again'
        : 'Enter password'
      ))
    },
    printDocument() {
        this.$refs.pdfRef.print();
    }
  }
}
</script>


<template>
    
    <div class="border my-8 border-gray-200
     shadow-xl w-[95vw] sm:w-5/6 min-h-[100vh] h-fit overflow-y-scroll mx-2 sm:mx-auto" 
    >
    <div :class="`shadow-md bg-gray-800`" class="h-16 w-full flex items-center justify-center px-8"  v-if="isLoading">
        <svg aria-hidden="true" :class="`mr-2 w-8 h-8 text-white animate-spin fill-blue-600`" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <h1 class="text-white font-semibold">Cargando PDF</h1>

        
    </div>
    <div :class="`shadow-md bg-gray-800`" class="h-16 w-full flex items-center justify-between px-8"  v-else>
        <span class="inline-flex gap-4">
            <BaseButton class="invisible pointer-events-none">
                <BaseIcon :name="'printer'" :class="`text-[${blankColor}]`" />
            </BaseButton>
          
        </span>
        <span :class="`text-[${blankColor}]`">
            <button class="mr-2" :disabled="page <= 1" @click="page--">
                
                <span :class="page<=1? `bg-[${blankColor}] border border-slate-200 text-slate-300`:
                    `bg-[${blankColor}] border border-slate-200 text-[${primaryColor}]`" 
                class="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2 border border-slate-200 text-slate-300">
                <span class="sr-only">Previo</span><wbr />
                <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16">
                    <path d="M9.4 13.4l1.4-1.4-4-4 4-4-1.4-1.4L4 8z" />
                </svg>
                </span>

            </button>
            
            {{ page }} <span class="mx-1">/</span> {{ pageCount }}
            <button class="ml-2" :disabled="page >= pageCount" @click="page++">
                <span 
                :class="page>=pageCount? `bg-[${blankColor}] border border-slate-200 text-slate-300`:`bg-[${blankColor}] border border-slate-200 text-[${primaryColor}]`"
                class="inline-flex items-center justify-center rounded leading-5 px-2.5 py-2">
                    <span class="sr-only">Siguiente</span><wbr />
                    <svg class="h-4 w-4 fill-current" viewBox="0 0 16 16">
                    <path d="M6.6 13.4L5.2 12l4-4-4-4 1.4-1.4L12 8z" />
                </svg>
                </span>
                
            </button>
        </span>
        <span class="inline-flex gap-4">
            <BaseButton class="px-1 border-none ring-0" @click="printDocument()">
                <BaseIcon :name="'printer'" :class="`text-[${blankColor}]`" />
            </BaseButton>
            <BaseButton class="px-1 border-none ring-0">
                <a :href="downloadSource"> 
                    <BaseIcon :name="'download'" :class="`text-[${blankColor}]`" />
                </a>
               
            </BaseButton>
        </span>
        
        
    </div>
   
    <VuePdfEmbed
    class="w-full h-auto"
    ref="pdfRef"
    :source="pdfSource"
    :page="page"
    @password-requested="handlePasswordRequest"
    @rendered="handleDocumentRender"
     /> 
    </div>
    
</template>