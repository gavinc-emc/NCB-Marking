<?php
defined('_JEXEC') or die;
?>
<div id="headerwrap"  class="clearfix">
  <div class="internal-container">
    <?php if ($this->countModules('header1')) : ?>
      <div id="header1">
        <jdoc:include type="modules" name="header1" style="xhtml" />
      </div>
    <?php endif;?>

    <?php if ($this->countModules('header2')) : ?>
      <div id="header2">
        <jdoc:include type="modules" name="header2" style="xhtml" />
      </div>
    <?php endif;?>

    <?php if ($this->countModules('header3')) : ?>
      <div id="header3">
        <jdoc:include type="modules" name="header3" style="xhtml" />
      </div>
    <?php endif;?>

    <?php if ($this->countModules('header4')) : ?>
      <div id="header4">
        <jdoc:include type="modules" name="header4" style="xhtml" />
      </div>
    <?php endif;?>
  </div>
</div>
<div id="topwrap" class="clearfix">
  <div class="internal-container">
    <a href="#menu" class="nav-btn">Menu</a>
    <?php if ($this->countModules('top1')) : ?>
      <div id="top1">
        <jdoc:include type="modules" name="top1" style="xhtml" />
      </div>
    <?php endif;?>

    <?php if ($this->countModules('top2')) : ?>
      <div id="top2">
        <jdoc:include type="modules" name="top2" style="xhtml" />
      </div>
    <?php endif;?>

    <?php if ($this->countModules('top3')) : ?>
      <div id="top3">
        <jdoc:include type="modules" name="top3" style="xhtml" />
      </div>
    <?php endif;?>

    <?php if ($this->countModules('top4')) : ?>
      <div id="top4">
        <jdoc:include type="modules" name="top4" style="xhtml" />
      </div>
    <?php endif;?>
  </div>
</div>
