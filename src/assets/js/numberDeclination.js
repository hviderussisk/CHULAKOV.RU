export default function words(age, arrayWords){
    const a = age.toString(); const a1 = a[a.length - 1]; const a2 = a[a.length - 2]
    return a1 == 1 && a2 != 1 ? arrayWords[0] :  a2 == 1 || a1 > 4 || a1 == 0 ? arrayWords[1] : 1 < a1 < 5 ? arrayWords[2] : undefined
}