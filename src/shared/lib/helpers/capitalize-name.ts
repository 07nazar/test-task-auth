export const capitalizeName = (fullName: string): string => {
  const words = fullName.split(' ')

  const capitalizedWords = words.map(word => {
    if (word.length === 1) {
      return word.toUpperCase()
    }

    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })

  const capitalizedName = capitalizedWords.join(' ')

  return capitalizedName
}
