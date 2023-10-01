import pyautogui as gui
import time



def maximize_window():
    time.sleep(0.5)
    gui.hotkey('win', 'up')
    time.sleep(0.5)
    gui.hotkey('win', 'up')
   