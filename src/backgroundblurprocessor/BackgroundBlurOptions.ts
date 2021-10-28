// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import Logger from '../logger/Logger';

/**
 * A set of options that can be supplied when creating a background blur video frame processor.
 */
export default interface BackgroundBlurOptions {
  /** A {@link Logger|Logger} to which log output will be written. */
  logger?: Logger;

  /** How often the video frame processor will report observed events. */
  reportingPeriodMillis?: number;

  /** The amount of blur that will be applied to a video stream. */
  blurStrength?: number;

  /**
   * The number of video frames to be process before updating the background filtering. For example, the default
   * rate of 1, meaning 1 video frame per background filter update, will update the background effect on every frame.
   * If you set a ratio to 3, meaning 3 video frames per background filter update, it will update the background
   * filtering effect every third frame.
   *
   * This can be used to reduce the CPU workload on a video stream using background filter. The higher the skip rate
   * the less CPU will be used.
   */
  videoFramesPerFilterUpdate?: number;
}
