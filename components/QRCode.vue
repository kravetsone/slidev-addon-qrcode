<template>
    <div id="qr-code" ref="qrCodeRef"></div>
</template>

<script setup lang="ts">
import QRCodeStyling, { type Options, } from 'qr-code-styling';

const props = withDefaults(defineProps<Options>(), {
    type: "canvas",
    width: 300,
    height: 300,
    data: "",
    margin: 0,
    qrOptions: () => ({
        typeNumber: 0,
        mode: undefined,
        errorCorrectionLevel: "Q"
    }),
    imageOptions: () => ({
        hideBackgroundDots: true,
        imageSize: 0.4,
        crossOrigin: undefined,
        margin: 0
    }),
    dotsOptions: () => ({
        type: "square",
        color: "#000"
    }),
    backgroundOptions: () => ({
        color: "#fff"
    })
});

const qrCode = new QRCodeStyling(props);

import { onMounted, ref } from 'vue';

const qrCodeRef = ref(null);
onMounted(() => {
    if (qrCodeRef.value) qrCode.append(qrCodeRef.value);
});
</script>