<template>
    <div class="container">
        <b-card>
 <h2>This a Map</h2>
       <br>

       <GmapMap
        :center='center'
        :zoom='12'
        style='width:100%; height: 400px;'
        />
        </b-card>
      
    </div>
        

</template>

<script>

export default{
    data() {
        return{
            center: { lat: 13.503043734075197, lng: -88.35320504786823,}
        }
    }
}
</script>