<template>
    <Page>
        <ActionBar title="Shopping List" />
        <StackLayout>
            <LandingPage />
        </StackLayout>
    </Page>
</template>

<script>
  import LandingPage from './components/LandingPage';

  export default {
    components: {
      LandingPage
    }
  }
</script>

<style>
  /** Add parent CSS **/
</style>
