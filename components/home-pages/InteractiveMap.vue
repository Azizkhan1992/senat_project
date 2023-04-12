<template>
    <section class="map_section">
        <div class="interactive_map_container commonContent">
            <h2 class="mainP">{{ $t('map_title') }}</h2>

            <div class="map_tabs">
                <a-tabs default-active-key="1" @change="callback">
                    <a-tab-pane key="1" :tab="$t('by_district')">
                        <div class="map_district_container">
                            <a-col :span="16">
                                <div class="map_district_wrapper">
                                    <DistrictsMap/>
                                </div>
                            </a-col>
                            <a-col :span="8">
                                <Senators/>
                            </a-col>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="2" :tab="$t('by_commit')" force-render>
                        <div class="assemblies_container">
                            <a-col :span="15">
                                <Assemblies/>
                            </a-col>
                            <a-col :span="8">
                                <Senators/>
                            </a-col>
                        </div>
                    </a-tab-pane>
                </a-tabs>
            </div>
        </div>
    </section>
</template>
<script>
import Assemblies from './Assemblies.vue';
import DistrictsMap from './DistrictsMap.vue'
import Senators from './Senators.vue';
export default {
    name: 'interactive-map',
    components: {DistrictsMap, Senators, Assemblies},
    methods: {
        callback(key) {
            // console.log(key);
        },
    }
}
</script>