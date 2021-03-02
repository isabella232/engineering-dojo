#!/usr/bin/env python

import os
import json
import yaml

PATH = os.path.dirname(os.path.abspath(__file__))


with open(os.path.join(PATH, "career_ladder.yaml"), "r") as f:
    content = yaml.safe_load(f)


with open(os.path.join(PATH, "career_ladder.json"), "w") as f:
    json.dump(content, f)