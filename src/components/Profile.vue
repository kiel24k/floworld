<template>
    <div>
        <h1>This is Profile page</h1>
    </div>
    <button @click="test">Local storage</button>
</template>

<script setup>
// const cookie = await cookieStore.getAll()
// console.log(cookie);
const test = () => {
    alert(location)
};

</script>