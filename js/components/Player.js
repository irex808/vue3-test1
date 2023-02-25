export default{
    template:
    `
    <section>
        <li class="p-2 flex justify-between items-center">
            {{ player.name }}
        </li>
    </section>
    `,
    props:{
        player:Object
    }
};