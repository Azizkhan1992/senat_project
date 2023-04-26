export default async function ({$axios, app}){
    $axios.onRequest(_ => {
        $axios.setHeader("Accept-language", app.i18n.locale || "uz")
    })
}