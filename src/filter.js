// FILTRO DE PELICULA POR DIRECTOR
export const filter = (data, condicion) => {

    const resultFilter = data.filter (element => {
        return element.director.includes(condicion)
    })
    return resultFilter
}


//FILTRO DE PERSONAJES POR PELICULA
export const filterFilms= (data, filmsItem) => {

    const resultFilterByFilms= data.filter(element => {
        return element.title.includes(filmsItem)
    })
    return resultFilterByFilms
}


// export const filterGender= (data, genderItem) => {

//     const resultFilterGender= data.filter(element => {
//         return element.people.includes('gender',genderItem)
//     })
//     return resultFilterGender
// }