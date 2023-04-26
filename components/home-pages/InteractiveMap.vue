<template>
    <section class="map_section">
        <div class="interactive_map_container commonContent">
            <h2 class="mainP">{{ $t('map_title') }}</h2>

            <div class="map_tabs">
                <a-tabs default-active-key="1" @change="callback">
                    <a-tab-pane key="1" :tab="$t('by_district')">
                        <div class="map_district_container">
                            <a-row type="flex" :gutter="[12, 12]">
                                <a-col :xs="24" :sm="24" :lg="16" :xl="17" :xxl="17">
                                <div class="map_district_wrapper">
                                    <DistrictsMap/>
                                </div>
                            </a-col>
                            <a-col :xs="24" :sm="24" :lg="8" :xl="7" :xxl="7">
                                <Senators/>
                            </a-col>
                            </a-row>
                        </div>
                    </a-tab-pane>
                    <a-tab-pane key="2" :tab="$t('by_commit')" force-render>
                        <div class="assemblies_container">
                            <a-row type="flex" :gutter="[6, 6]">
                                <a-col :xs="24" :sm="24" :lg="16" :xl="17" :xxl="17">
                                <Assemblies/>
                            </a-col>
                            <a-col :xs="24" :sm="24" :lg="8" :xl="7" :xxl="7">
                                <Senators/>
                            </a-col>
                            </a-row>
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