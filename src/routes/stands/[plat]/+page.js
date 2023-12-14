/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    return {
       nom_plat : params.plat
    } 
}