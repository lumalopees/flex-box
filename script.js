
const gerarImagens = (arrayDeDados) => {


}

window.onload = () => {
    const people = {
        Turma: ['https://ca.slack-edge.com/TMDDFEPFU-U05KN9G9RGD-fa4731ad3264-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U05LEU20N7J-65115d21576e-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U0532H7K6FM-5d521647a4cc-192',
            'https://ca.slack-edge.com/TMDDFEPFU-U05CQS45YJ2-e78280102ba1-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U05DA588JQ1-9dfc71b36ea9-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U05KTLJ4AH2-313df9d30ff7-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U05D1DQRP5L-a8f0c95befe3-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U05KR4B6WV9-a0f3df5bf56d-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U05KJHDQEHL-e8a51b882369-192',
            'https://ca.slack-edge.com/TMDDFEPFU-U052ZNZ7U6R-a796f69988aa-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U057NJADEES-23adf1908b10-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U05LEU1966L-9de32f181268-192',
            'https://ca.slack-edge.com/TMDDFEPFU-U05LETVGYQ0-b74cbe661e96-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U0532H95WJF-d1ced896cdab-192',
            'https://ca.slack-edge.com/TMDDFEPFU-U05KR7EFTU2-910621be2305-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U052N4Y8487-77becca7692d-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U05LETY79CG-fca716079498-192',],
        Time: ['https://ca.slack-edge.com/TMDDFEPFU-U01FWFS901G-1e757c976fc5-512',
            'https://ca.slack-edge.com/TM13XHBBQ-U03DNHZLCH1-1673b49a990f-512',
            'https://ca.slack-edge.com/TM13XHBBQ-U035TM9C7DJ-50dd640a9409-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U0242BL909E-86f2c8470127-512',
            'https://ca.slack-edge.com/TM13XHBBQ-U01JQRR7FSS-08320a8171e3-512',
            'https://ca.slack-edge.com/TMDDFEPFU-U039N8GEQF9-dcb5a6e84168-512',],
        Brabos: ['https://ca.slack-edge.com/TM13XHBBQ-U03A4LULS9F-2e920b87d97a-512',
            'https://ca.slack-edge.com/TM13XHBBQ-U01JQRR7FSS-08320a8171e3-512'],
    }

    const selectPerson = document.getElementById('groupSelection');

    selectPerson.addEventListener('change', (event) => {
        console.log(people[selectPerson.value]);
        gerarImagens()
    })

}