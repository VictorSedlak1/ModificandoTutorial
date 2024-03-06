import { onMounted, onUnmounted, ref } from 'vue';


export function useScreen() {
  const browserWidth = ref(window.innerWidth);
  const deviceWidth = ref(screen.width);
  const isMobile = ref(window.innerWidth <768);
  const isTablet = ref(window.innerWidth < 1000 & window.innerWidth > 768 );
  const isDesktop = ref(window.innerWidth > 1000);

  const onBrowserResize = () => {
    browserWidth.value = window.innerWidth;
    deviceWidth.value = screen.width;
    isMobile.value = window.innerWidth < 768;
    isTablet.value = window.innerWidth < 1000 & window.innerWidth > 768;
    isDesktop.value = window.innerWidth > 1000;
  };

  

  onMounted(() => {
    window.addEventListener('resize', onBrowserResize);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', onBrowserResize);
  });

  

  return { browserWidth, deviceWidth, isMobile, isTablet, isDesktop};
}
